<main>
    <h1>Admin Posts</h1>
        <article id="posts" class="cf one-whole box-mini-bottom" each={ post, i in opts.posts  } >
            <h2>{ post.title }</h2>

            <p>{ post.excerpt }</p>

              <a onclick={ trash } href="#" class="right js-delete box-mini"  data-id="{post._id }">TRASH</a>


        </article>
        trash (e) {
        console.log(e)
        alert(e)
        }
</main>