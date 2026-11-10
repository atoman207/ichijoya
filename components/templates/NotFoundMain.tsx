// 404.php main content.

export default function NotFoundMain() {
  return (
    <div className="c-wp-template u-mt60 u-ml-auto u-mr-auto">
      <div className="c-wp-template-header">
        <h2>
          Not Found
        </h2>
        <p>
          存在しないページです
        </p>
      </div>
      <p className="c-wp-template-textarea">
        {" アクセスしようとしたページは上記の理由で表示できませんでした。 "}
      </p>
      <a href="/" className="c-wp-template-btn  c-wp-template-btn--start">
        トップページへ移動
      </a>
    </div>
  )
}
