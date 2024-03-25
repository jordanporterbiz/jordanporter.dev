import { client } from "./sanity.client"
import imageUrlBuilder from "@sanity/image-url"

const builer = imageUrlBuilder(client);

function urlFor(source: any) {
    return builer.image(source);
}

export default urlFor;