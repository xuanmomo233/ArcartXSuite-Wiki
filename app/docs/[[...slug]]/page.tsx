import { source } from '@/lib/source';
import { docRedirects, getDocRedirect } from '@/lib/doc-redirects';
import { DocRedirect } from '@/components/DocRedirect';
import {
  DocsPage,
  DocsBody,
  DocsDescription,
  DocsTitle,
} from 'fumadocs-ui/page';
import { notFound } from 'next/navigation';
import defaultMdxComponents from 'fumadocs-ui/mdx';
import Link from 'next/link';
import type { Metadata } from 'next';

export default async function Page({
  params,
}: {
  params: Promise<{ slug?: string[] }>;
}) {
  const { slug } = await params;
  const redirect = getDocRedirect(slug);
  const page = source.getPage(slug);
  if (!page && redirect?.destination) {
    return (
      <DocsPage breadcrumb={{ enabled: false }} footer={{ enabled: false }}>
        <DocRedirect {...redirect} />
        <DocsTitle>文档地址已更新</DocsTitle>
        <DocsBody id="main-content" className="suite-prose">
          <p><Link href={redirect.destination}>打开当前文档</Link></p>
        </DocsBody>
      </DocsPage>
    );
  }
  if (!page) notFound();

  const MDX = page.data.body;

  return (
    <DocsPage
      toc={page.data.toc}
      tableOfContent={{ style: 'clerk' }}
      full={page.data.full}
      breadcrumb={{ enabled: false }}
      footer={{ enabled: false }}
      article={{ className: 'suite-article' }}
    >
      {redirect && <DocRedirect {...redirect} />}
      <header className="docs-page-header">
        <DocsTitle>{page.data.title}</DocsTitle>
        <DocsDescription>{page.data.description}</DocsDescription>
      </header>
      <DocsBody id="main-content" className={slug?.[0] === 'map' ? 'suite-prose map-prose' : 'suite-prose'}>
        <MDX components={{ ...defaultMdxComponents }} />
      </DocsBody>
    </DocsPage>
  );
}

export async function generateStaticParams() {
  const aliases = Object.entries(docRedirects)
    .filter(([, redirect]) => redirect.destination)
    .map(([path]) => ({ slug: path.split('/') }));
  return [...source.generateParams(), ...aliases];
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug?: string[] }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const page = source.getPage(slug);
  if (!page && getDocRedirect(slug)?.destination) {
    return { title: '文档地址已更新', robots: { index: false } };
  }
  if (!page) return {};
  return {
    title: page.data.title,
    description: page.data.description,
  };
}
