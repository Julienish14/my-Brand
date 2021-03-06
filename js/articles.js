let article = document.querySelector('.art-container');
const blogs = fetch(`https://my-brand-project.herokuapp.com/api/v1/articles`)
    .then(data => data.json());

blogs.then(res => {
    res.data.posts.map(blog => {
        let date = `${new Date(blog.date)}`.split(" ");
        article.innerHTML += `<div class="art-item">
        <div class="art-image">
            <img class="blog-image" src="${globalURL}/img/blog/${blog.blogImage}" alt="image" width="160px" height="110px">
        </div>
        <div class="art-info">
            <h3 class="art-title"> <a class="text-link" href="./blogdisplay.html">${blog.title}</a></h3>
            <div class="art-meta"> <span class="date">Published ${date[0]} ${date[1]} ${date[2]} ${date[3]}</span> <span class="art-comment"> <a class="text-link" href="#">7 comments</a></span> </div>
            <div class="art-intro">${blog.content.slice(0, 150)}...</div>
            <a class="text-link readMore" href="./blogdisplay.html"> Read more &rarr;</a>
        </div>
    </div>        `
    
    });
});
