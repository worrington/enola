import {SitemapStream, streamToPromise} from "sitemap";
import {Readable} from "stream";

const sitemap = async (_req, res) => {
    // Listado de tus páginas
    const sitemap = [{
        url: "/",
        changefreq: "yearly",
        priority: 1.0
    }];
    const sitemapStream = new SitemapStream({
        hostname: 'https://enola.com.mx/'
    });
    res.writeHead(200, {
        "Content-Type": "application/xml"
    });
    const xmlString = await streamToPromise(
        Readable
            .from(sitemap)
            .pipe(sitemapStream)
    ).then(
        (data) => data.toString()
    );
    res.end(xmlString);
}

export default sitemap;