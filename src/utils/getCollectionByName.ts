import {getCollection} from "astro:content";
import {defaultLang, getPostLang, type Lang} from "../i18n/utils";

export const getCollectionByName = async (name: string, lang: Lang | 'all' = defaultLang) => {
  let posts = await getCollection(name);
  if (posts && posts.length > 0 ) {
    const publishedPosts = posts.filter(({data}) => {
      const isPublished = import.meta.env.PROD ? !data.draft : true;
      return isPublished;
    });
    if (lang === 'all') {
      return publishedPosts;
    }
    const localizedPosts = publishedPosts.filter(({data}) => getPostLang(data) === lang);
    return localizedPosts.length > 0
      ? localizedPosts
      : publishedPosts.filter(({data}) => getPostLang(data) === defaultLang);
  } else {
    return []
  }
}
