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

// テンプレートを登録（全て同じPagePreviewを使用）
CMS.registerPreviewTemplate('index', PagePreview);
CMS.registerPreviewTemplate('about', PagePreview);
CMS.registerPreviewTemplate('posts', PagePreview);
CMS.registerPreviewTemplate('games', PagePreview);
CMS.registerPreviewTemplate('novels-index', PagePreview);
CMS.registerPreviewTemplate('log-01', PagePreview);
CMS.registerPreviewTemplate('log-02', PagePreview);
CMS.registerPreviewTemplate('log-03', PagePreview);
CMS.registerPreviewTemplate('log-04', PagePreview);
CMS.registerPreviewTemplate('log-05', PagePreview);
CMS.registerPreviewTemplate('log-06', PagePreview);
CMS.registerPreviewTemplate('log-07', PagePreview);
CMS.registerPreviewTemplate('log-08', PagePreview);
CMS.registerPreviewTemplate('log-09', PagePreview);
CMS.registerPreviewTemplate('log-10', PagePreview);
CMS.registerPreviewTemplate('log-11', PagePreview);
CMS.registerPreviewTemplate('log-12', PagePreview);
CMS.registerPreviewTemplate('log-13', PagePreview);
CMS.registerPreviewTemplate('novels', PagePreview);
