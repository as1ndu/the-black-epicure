import { Now, allNows } from 'contentlayer/generated'
import { MDXLayoutRenderer } from 'pliny/mdx-components'
import { genPageMetadata } from 'app/seo'

export const metadata = genPageMetadata({ title: 'Now Now Now' })

export default function Page() {
  const now = allNows.find((p) => p.slug === 'now') as Now

  return (
    <>
      <div className="divide-y divide-gray-200 dark:divide-gray-700">
        <div className="space-y-2 pt-6 pb-8 md:space-y-5">
          <h1 className="text-3xl leading-9 font-extrabold tracking-tight text-gray-900 sm:text-4xl sm:leading-10 md:text-6xl md:leading-14 dark:text-gray-100">
            What I'm Doing Now
          </h1>
          <p className="text-lg leading-7 text-gray-500 dark:text-gray-400">Now Now Now Page.</p>
        </div>
        <div className="container py-12">
          <div className="-m-4 flex flex-wrap">
            <div className="mx-auto w-full px-4 sm:px-6">
              <div className="prose dark:prose-invert max-w-none py-8">
                <MDXLayoutRenderer code={now.body.code} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
