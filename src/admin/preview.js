// 98.cssとカスタムスタイルを登録
CMS.registerPreviewStyle("https://unpkg.com/98.css");
CMS.registerPreviewStyle("/css/style.css");

// ページプレビューテンプレート
const PagePreview = createClass({
  render() {
    const entry = this.props.entry;
    const title = entry.getIn(['data', 'title']);
    const body = this.props.widgetFor('body');

    return h('div', { className: 'window' },
      h('div', { className: 'title-bar' },
        h('div', { className: 'title-bar-text' },
          `ユリカゴ水族館 - ${title}`
        ),
        h('div', { className: 'title-bar-controls' },
          h('button', { 'aria-label': 'Minimize' }),
          h('button', { 'aria-label': 'Maximize' }),
          h('button', { 'aria-label': 'Close' })
        )
      ),
      h('div', { className: 'window-body' },
        h('nav', { 'aria-label': 'global navigation' },
          h('ul', { role: 'list' },
            h('li', {}, h('a', { href: '/' }, 'トップ')),
            h('li', {}, h('a', { href: '/novels/' }, '深海エリア')),
            h('li', {}, h('a', { href: '/posts/' }, '飼育日記')),
            h('li', {}, h('a', { href: '/games/' }, '水槽エリア')),
            h('li', {}, h('a', { href: '/about/' }, '館内案内'))
          )
        ),
        h('main', {}, body)
      )
    );
  }
});

// 深海ログプレビューテンプレート（画像付き）
const LogPreview = createClass({
  render() {
    const entry = this.props.entry;
    const title = entry.getIn(['data', 'title']);
    const image = entry.getIn(['data', 'image']);
    const body = this.props.widgetFor('body');
    const getAsset = this.props.getAsset;

    return h('div', { className: 'window' },
      h('div', { className: 'title-bar' },
        h('div', { className: 'title-bar-text' },
          `ユリカゴ水族館 - ${title}`
        ),
        h('div', { className: 'title-bar-controls' },
          h('button', { 'aria-label': 'Minimize' }),
          h('button', { 'aria-label': 'Maximize' }),
          h('button', { 'aria-label': 'Close' })
        )
      ),
      h('div', { className: 'window-body' },
        h('nav', { 'aria-label': 'global navigation' },
          h('ul', { role: 'list' },
            h('li', {}, h('a', { href: '/' }, 'トップ')),
            h('li', {}, h('a', { href: '/novels/' }, '深海エリア')),
            h('li', {}, h('a', { href: '/posts/' }, '飼育日記')),
            h('li', {}, h('a', { href: '/games/' }, '水槽エリア')),
            h('li', {}, h('a', { href: '/about/' }, '館内案内'))
          )
        ),
        h('main', {},
          h('h1', {}, title),
          image ? h('img', {
            src: getAsset(image).toString(),
            alt: title,
            className: 'banner broken-banner'
          }) : null,
          body
        )
      )
    );
  }
});

// テンプレートを登録
CMS.registerPreviewTemplate('index', PagePreview);
CMS.registerPreviewTemplate('about', PagePreview);
CMS.registerPreviewTemplate('posts', PagePreview);
CMS.registerPreviewTemplate('games', PagePreview);
CMS.registerPreviewTemplate('novels-index', PagePreview);
CMS.registerPreviewTemplate('deep-sea-logs', LogPreview);
CMS.registerPreviewTemplate('novels', PagePreview);
