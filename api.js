var {toJson} = require('xml2json'),
axios = require('axios'),
{readFileSync} = require('fs'),
{ join } = require('path'),
{render} = require('ejs');

async function read(id){
return getBook(id,'read')
}

async function badge(id){
// console.log(await getBase64('https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1344267416l/101438.jpg'))
var main = await current(id)
return render(readFileSync(join('_files','badge.ejs')).toString(), {main:main , cover:await getBase64(main.cover)})
}
  

async function current(id){
return (await getBook(id,'currently-reading'))[0]
}
async function want(id){
return getBook(id,'want-to-read')
}
module.exports = {read,badge,current,want}
async function getBook(id,shelf){
var data = toJson((await axios.get(`https://www.goodreads.com/review/list_rss/${id}??shelf=${shelf}`)).data)
return JSON.parse(data).rss.channel.item.map(
    ({ title, author_name, link, book, ...rest }) => {
      return {
        title,
        author: author_name,
        pages: parseInt(book.num_pages, 10),
        read: rest.user_read_at,
        start: rest.user_date_created,
        rating: parseInt(rest.user_rating, 10),
        published: parseInt(rest.book_published, 10),
        cover: rest.book_large_image_url,
        goodreads_id: parseInt(rest.book_id, 10),
        goodreads: link.replace(/\?.*$/, ''),
        review: rest.user_review,
}})
}


async function getBase64(url) {
return Buffer.from((await axios.get(url,{responseType: 'arraybuffer'})).data).toString('base64')   
}