import { useParams, Link } from "react-router-dom";
import ShareButtons from "./ShareButtons";
import { useTranslation } from "react-i18next";

function BlogPost() {
  const { id } = useParams();
  const { t, i18n } = useTranslation();

  const post = t(`blogPost.posts.${id}`, { returnObjects: true });

  if (!post || !post.id) {
    return (
      <div className="container mx-auto px-4 py-12">
        <Link
          to="/"
          className="text-blue-600 hover:text-blue-800 mb-6 inline-block"
        >
          {t("backToHome")}
        </Link>
        <div className="text-center">Post not found</div>
      </div>
    );
  }

  return (
    <div className="container mx-auto px-4 py-12">
      <Link
        to="/"
        className="text-blue-600 hover:text-blue-800 mb-6 inline-block"
      >
        {t("backToHome")}
      </Link>

      <article className="max-w-4xl mx-auto bg-white rounded-xl shadow-lg overflow-hidden">
        <img
          src={post.image}
          alt={post.title}
          className="w-full h-[500px] object-cover"
          loading="lazy"
        />

        <div className="p-8">
          <div className="flex items-center justify-between mb-6">
            <div className="flex items-center gap-3 text-sm text-gray-600">
              <span className="px-3 py-1 bg-gray-100 rounded-full">
                {post.category}
              </span>
              <span>{post.date}</span>
              <span>•</span>
              <span className="font-medium">{post.author}</span>
            </div>
            <ShareButtons url={window.location.href} title={post.title} />
          </div>

          <h1 className="text-4xl font-bold mb-8 text-gray-900">
            {post.title}
          </h1>

          <div
            className="prose prose-lg max-w-none prose-headings:text-gray-900 prose-p:text-gray-700"
            dangerouslySetInnerHTML={{ __html: post.content }}
          />
        </div>
      </article>
    </div>
  );
}

export default BlogPost;
