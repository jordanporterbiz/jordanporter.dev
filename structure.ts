import { Iframe }  from "sanity-plugin-iframe-pane";
import type { DefaultDocumentNodeResolver } from "sanity/structure"

export const getDefaultDocumentNode: DefaultDocumentNodeResolver = (S,{ schemaType }) => {
    
    if (schemaType === "post") {
        return S.document().views([
            S.view.form(),
            S.view.component(Iframe).options({
                // Required: Accepts an async function 
                // Or a string that is a URL
                    url: `${process.env.NEXT_PUBLIC_VERCEL_URL || "http://localhost:3000"}/api/preview"`,
                    defaultSize: `desktop`,
                    reload: {
                        button: true,
                    },
                    atrributes: {
                    },
                }).title("Preview"),
        ]);
    }
}