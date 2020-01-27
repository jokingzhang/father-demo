export default 
{
    // cssModules: true, // 默认是 .module.css 走 css modules，.css 不走 css modules。配置 cssModules 为 true 后，全部 css 文件都走 css modules。（less 文件同理）
    extractCSS: true,
    esm: 'babel',
    cjs: 'babel',
    umd: {
      name: 'father-demo',
      sourcemap: true,
      globals: {
        react: 'React',
        antd: 'antd'
      },
    },
    extraBabelPlugins: [
      ['import', { libraryName: 'antd', libraryDirectory: 'es', style: true }],
    ],
    entry: 'src/index.tsx',
    lessInBabelMode: true,
    doc: {
      base: '/father-demo/',
      menu: [
        '首页',
        '组件'
      ]
    },
}