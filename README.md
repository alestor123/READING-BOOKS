# READING-BOOKS
This is a simple code for showing you  [goodread](https://www.goodreads.com/) books

![Vercel](https://therealsujitk-vercel-badge.vercel.app/?app=reading-books)

## It uses [goodread](https://www.goodreads.com/) RSS feed

![sample](https://reading-books-alestor123.vercel.app/current?type=svg)

# Usage 


## To get all the reads 
tyoe : JSON

```GET https://reading-books-alestor123.vercel.app/?id=<Good read user id>```

## To get  the current  reading 
type:JSON

```GET https://reading-books-alestor123.vercel.app/current?id=<Good read user id>```

## To get  the current reading badge 
type:SVG

```GET https://reading-books-alestor123.vercel.app/current?id=<Good read user id>&&type=svg```


## For showing the badge in markdown
 ``` 
 <img src="https://reading-books-alestor123.vercel.app/current?id=<Good read user id>&&type=svg">
 ```
 
 ## You Should get something like this 
 
 <img src="https://reading-books-alestor123.vercel.app/current?id=135991213&&type=svg">
 
 # Deploy On Vercel 
 
 ## Fork this repo 
 
 ## Click on the button right below
 
 [![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/git/external?repository-url=https%3A%2F%2Fgithub.com%2Falestor123%2FREADING-BOOKS%2F)


## Then you can set your own env variable on vercel
```
ID=<Your good read id which will be taken as default>
```
