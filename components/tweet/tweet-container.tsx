import type { ReactNode } from 'react'
import clsx from 'clsx'

type Props = { className?: string; children: ReactNode }

export const TweetContainer = ({ className, children }: Props) => (
  <div className={clsx('react-tweet-theme container-root h-[450px] border dark:border-0', className)}>
    <article className={"container-article"}>{children}</article>
  </div>
)
