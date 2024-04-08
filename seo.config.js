const seo = {
    titleTemplate: '%s - Next Map Service',
    openGraph: {
        type: 'website',
        site_name: 'Next Map Service',
        images: [
            { url: 'https://nextjs.org/static/blog/next-13/twitter-card.png' }
        ]
    },
    additionalLinkTags: [
        {
            rel: 'shortcut icon',
            href: '/favicon.ico'
        }
    ],
    additionalMetaTags: [
        {
            name: 'naver-site-verification',
            content: '43a5c2815788866bf551b7fb7c42c92d8802facf',
        },
        {
            name: 'google-site-verification',
            content: 'KuK5X8JUULZTHEiuARw-4ekavAPcPYRYB8yxeWkGFr4'
        }
    ]
}
export default seo;