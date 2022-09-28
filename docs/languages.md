# Languages

This demo comes with only a few configured languages:

- `en` and `fr-CA` in Sitecore.
- `en`, `fr-CA`, and `ja-JP` in the Next.js website.

## How to add a language to the demo

1. Edit `src\rendering\next.config.js`.
2. In the `nextConfig` const, add the new language to the `i18n.locales` array.
3. In Sitecore add the associated new language item.
4. Add content in the new language.
5. Redeploy the front-end application on XM Cloud.

**Hint:** If you add `ja-JP`, you can skip the modification and redeploy of the front-end application.
