import {defineConfig} from 'sanity'
import {visionTool} from '@sanity/vision'
import {schemaTypes} from './schemas'
import { myTheme } from './theme'
import StudioNavbar from './components/StudioNavbar'
import Logo from './components/Logo'
import StudioToolMenu from './components/StudioToolMenu'
import { codeInput } from "@sanity/code-input";
import { getDefaultDocumentNode } from './structure'
import { structureTool } from 'sanity/structure'

const projectId = process.env.NEXT_PUBLIC_SANITY_PROJECT_ID!
const dataset = process.env.NEXT_PUBLIC_SANITY_DATASET!

export default defineConfig({
  basePath: '/studio',
  name: 'JordanPorterDev_Content_Studio',
  title: 'JordanPorter.Dev',
  projectId,
  dataset,
  plugins: [
    structureTool({ defaultDocumentNode: getDefaultDocumentNode}),
    visionTool(),
    codeInput(),
  ],
  schema: {
    types: schemaTypes,
  },
  studio: {
    components: {
      logo: Logo,
      navbar: StudioNavbar,
      toolMenu: StudioToolMenu,
    }
  },
  theme: myTheme
  
})
