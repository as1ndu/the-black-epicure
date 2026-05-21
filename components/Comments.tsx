'use client'
import Giscus from '@giscus/react'

export default function Comments({ slug }: { slug: string }) {
  // const giscus_script = `<script src="https://giscus.app/client.js"
  //       data-repo="as1ndu/the-black-epicure"
  //       data-repo-id="R_kgDOSjYTvw"
  //       data-category="Ideas"
  //       data-category-id="DIC_kwDOSjYTv84C9kBF"
  //       data-mapping="pathname"
  //       data-strict="0"
  //       data-reactions-enabled="1"
  //       data-emit-metadata="1"
  //       data-input-position="top"
  //       data-theme="catppuccin_frappe"
  //       data-lang="en"
  //       data-loading="lazy"
  //       crossOrigin="anonymous"
  //       async>
  //     </script>`
  return (
    // <div dangerouslySetInnerHTML={{ __html: giscus_script }} />
    <Giscus
      repo="as1ndu/the-black-epicure"
      repoId="R_kgDOSjYTvw"
      category="Ideas"
      categoryId="DIC_kwDOSjYTv84C9kBF"
      mapping="pathname"
      strict="0"
      reactions-enabled="1"
      emitMetadata="1"
      inputPosition="top"
      theme="catppuccin_frappe"
      lang="en"
      loading="lazy"
    />
  )
}
