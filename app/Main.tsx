import Link from '@/components/Link'
import Tag from '@/components/Tag'
import siteMetadata from '@/data/siteMetadata'
import { formatDate } from 'pliny/utils/formatDate'
import NewsletterForm from 'pliny/ui/NewsletterForm'

const MAX_DISPLAY = 7

export default function Home({ posts }) {
  return (
    <>
      <div className="divide-y divide-gray-200 dark:divide-gray-700">
        <div className="space-y-2 pt-6 pb-8 md:space-y-5">
          <h1 className="text-3xl leading-9 font-extrabold tracking-tight text-gray-900 sm:text-4xl sm:leading-10 md:text-6xl md:leading-14 dark:text-gray-100">
            The Black Epicure
          </h1>
          <p className="text-lg leading-7 text-gray-500 dark:text-gray-400">
            {siteMetadata.description}
          </p>
        </div>
        <ul className="divide-y divide-gray-200 dark:divide-gray-700">
          {!posts.length && 'No posts found.'}
          {posts.slice(0, MAX_DISPLAY).map((post) => {
            const { slug, date, title, summary, tags } = post
            return (
              <li key={slug} className="py-12">
                <article>
                  <div className="space-y-2 xl:grid xl:grid-cols-4 xl:items-baseline xl:space-y-0">
                    <dl>
                      <dt className="sr-only">Published on</dt>
                      <dd className="text-base leading-6 font-medium text-gray-500 dark:text-gray-400">
                        <time dateTime={date}>{formatDate(date, siteMetadata.locale)}</time>
                      </dd>
                    </dl>
                    <div className="space-y-5 xl:col-span-3">
                      <div className="space-y-6">
                        <div>
                          <h2 className="text-2xl leading-8 font-bold tracking-tight">
                            <Link
                              href={`/blog/${slug}`}
                              className="text-gray-900 dark:text-gray-100"
                            >
                              {title}
                            </Link>
                          </h2>
                          <div className="flex flex-wrap">
                            {tags.map((tag) => (
                              <Tag key={tag} text={tag} />
                            ))}
                          </div>
                        </div>
                        <div className="prose max-w-none text-gray-500 dark:text-gray-400">
                          {summary}
                        </div>
                      </div>
                      <div className="text-base leading-6 font-medium">
                        <Link
                          href={`/blog/${slug}`}
                          className="text-primary-500 hover:text-primary-600 dark:hover:text-primary-400"
                          aria-label={`Read more: "${title}"`}
                        >
                          Read more &rarr;
                        </Link>
                      </div>
                    </div>
                  </div>
                </article>
              </li>
            )
          })}
        </ul>
      </div>
      {posts.length > MAX_DISPLAY && (
        <div className="flex justify-end text-base leading-6 font-medium">
          <Link
            href="/blog"
            className="text-primary-500 hover:text-primary-600 dark:hover:text-primary-400"
            aria-label="All posts"
          >
            All Posts &rarr;
          </Link>
        </div>
      )}
      <div className="flex items-center justify-center pt-4">
        {/* <NewsletterForm apiUrl="https://buttondown.com/api/emails/embed-subscribe/the-black-epicure" /> */}
        <div className="flex items-center justify-center pt-4">
          <div>
            <div className="pb-1 text-lg font-semibold text-gray-800 dark:text-gray-100">
              Subscribe to the newsletter
            </div>
            <form
              className="flex flex-col sm:flex-row"
              action="https://buttondown.com/api/emails/embed-subscribe/the-black-epicure"
              method="post"
            >
              <div>
                <label htmlFor="email-input">
                  <span className="sr-only">Email address</span>
                  <input
                    autoComplete="email"
                    className="focus:ring-primary-600 w-72 rounded-md px-4 focus:border-transparent focus:ring-2 focus:outline-none dark:bg-black"
                    id="email-input"
                    placeholder="steve.jobs@apple.com"
                    type="email"
                    name="email"
                  />
                </label>
              </div>
              <div className="mt-2 flex w-full rounded-md shadow-sm sm:mt-0 sm:ml-3">
                <button
                  className="bg-primary-500 hover:bg-primary-700 dark:hover:bg-primary-400 focus:ring-primary-600 w-full rounded-md px-4 py-2 font-medium text-white focus:ring-2 focus:ring-offset-2 focus:outline-none sm:py-0 dark:ring-offset-black"
                  type="submit"
                >
                  Sign up
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  )
}
