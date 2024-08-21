import contentful from "contentful";
import {documentToHtmlString} from "@contentful/rich-text-html-renderer";

export const contentfulClient = contentful.createClient({
    space: import.meta.env.CONTENTFUL_SPACE_ID,
    accessToken: import.meta.env.CONTENTFUL_DELIVERY_TOKEN,
    host: "cdn.contentful.com",
});

// this is just a helper function that lets us handle images inside the body content
export const renderBodyContent = body => {
    return documentToHtmlString(body, {
        renderNode: {
            ["embedded-asset-block"]: (node) => `<img src="${node.data.target.fields.file.url}" class="my-6 rounded max-w-full" />`,
        }
    })
};
