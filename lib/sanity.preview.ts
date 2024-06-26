"use client";

import { definePreview } from "next-sanity/preview";
import { projectId, dataset } from "./sanity.client";

function onPublicAccessOnly() {
    throw new Error(`Unable to load preview when not logged in to Sanity.io.`)
}

if(!projectId || !dataset) {
    throw new Error(`Missing projectId or dataset. Check your sanity.json or .env file.`)
}

export const usePreview = definePreview({
    projectId,
    dataset,
    onPublicAccessOnly,
});