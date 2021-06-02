import Document from 'next/document'
import { ServerStyleSheet } from 'styled-components'
import { ServerStyleSheets } from '@material-ui/styles';
export default class MyDocument extends Document {
  static async getInitialProps(ctx) {
    const sheet = new ServerStyleSheet()
    const materialSheets = new ServerStyleSheets()
    const styledComponentsSheet = new ServerStyleSheet()
    const originalRenderPage = ctx.renderPage

    try {
      ctx.renderPage = () =>
        originalRenderPage({
          enhanceApp: (App) => (props) =>
            sheet.collectStyles(<App {...props} />),
          enhanceApp: App => props =>
            styledComponentsSheet.collectStyles(materialSheets
              .collect(<App {...props} />)),
        })

      const initialProps = await Document.getInitialProps(ctx)
      return {
        ...initialProps,
        styles: (
          <>
            {initialProps.styles}
            {sheet.getStyleElement()}
            {materialSheets.getStyleElement()}
            {styledComponentsSheet.getStyleElement()}
          </>
        ),
      }
    } finally {
      sheet.seal()
      styledComponentsSheet.seal()
    }
  }
}
