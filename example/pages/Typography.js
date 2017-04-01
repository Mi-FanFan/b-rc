/**
 * Created by Freeman on 2017/4/1.
 */
import React from 'react'
const NouFound = () => {

  return (
    <div className="wrapper-content ivu-article">
      <article>
        <h1>Font 字体</h1>
        <div className="anchor">
          <h2 id="概述">概述</h2>
        </div>
        <p>
          我们的 CSS 对字体进行了统一规范，力求在不同平台、浏览器下能显示出其最佳的效果。我们推荐 <i className="ivu-icon ivu-icon-social-apple"/>
          macOS（iOS）优先的策略，在不支持苹方字体的情况，使用备用字体。
        </p>
        <div className="anchor">
          <h3 id="字体预览">字体预览</h3>
        </div>
        <ul>
          <li>中文字体</li>
          <img src="https://file.iviewui.com/dist/aac43973c6b6d72bf7aa852ecb2302c5.png" className="demo-font-img"/>
          <li>英文字体</li>
          <img src="https://file.iviewui.com/dist/f4b37f948e311cb4bbcb609b17b8db62.png"
               className="demo-font-img"/>
        </ul>
        <div className="anchor">
          <h3 id="字体代码">字体代码</h3>
        </div>
        <div>
          <pre className="bg">
            <code className="css hljs">
              <span className="hljs-rule">
                <span className="hljs-attribute">font-family</span>:<span className="hljs-value"> <span
                className="hljs-string">"Helvetica Neue"</span>,Helvetica,<span
                className="hljs-string">"PingFang SC"</span>,<span
                className="hljs-string">"Hiragino Sans GB"</span>,<span
                className="hljs-string">"Microsoft YaHei"</span>,<span className="hljs-string">"微软雅黑"</span>,Arial,sans-serif</span></span>;</code></pre>
          <span className="copy"><i className="ivu-icon ivu-icon-clipboard"
          ></i> <i
            className="ivu-icon ivu-icon-checkmark"></i></span>
        </div>
        <div className="anchor"><h3 id="字体使用规范">字体使用规范</h3>    <a
          href="#字体使用规范">#</a></div>
        <div className="api ivu-row">
          <div className="ivu-col ivu-col-span-12">
            <table>
              <thead>
              <tr>
                <th>中文字体</th>
                <th>示例</th>
                <th>粗细</th>
                <th>颜色</th>
                <th>字号</th>
              </tr>
              </thead>
              <tbody>
              <tr>
                <td>主标题</td>
                <td><span
                >我是标题</span>
                </td>
                <td>加粗</td>
                <td>#464c5b</td>
                <td>16px</td>
              </tr>
              <tr>
                <td>次级标题</td>
                <td><span
                >我是标题</span>
                </td>
                <td>加粗</td>
                <td>#464c5b</td>
                <td>14px</td>
              </tr>
              <tr>
                <td>小标题</td>
                <td><span
                >我是标题</span>
                </td>
                <td>加粗</td>
                <td>#464c5b</td>
                <td>12px</td>
              </tr>
              <tr>
                <td>正文</td>
                <td><span >我是正文</span></td>
                <td>默认</td>
                <td>#657180</td>
                <td>12px</td>
              </tr>
              <tr>
                <td>辅助文字</td>
                <td><span >我是辅助文字</span></td>
                <td>默认</td>
                <td>#9ea7b4</td>
                <td>12px</td>
              </tr>
              <tr>
                <td>失效文字</td>
                <td><span >我是失效文字</span></td>
                <td>默认</td>
                <td>#c3cbd6</td>
                <td>12px</td>
              </tr>
              <tr>
                <td>链接文字</td>
                <td><a href="#">我是链接文字</a></td>
                <td>默认</td>
                <td>#3399ff</td>
                <td>12px</td>
              </tr>
              </tbody>
            </table>
          </div>
          <div className="ivu-col ivu-col-span-12">
            <table>
              <thead>
              <tr>
                <th>英文字体</th>
                <th>示例</th>
                <th>粗细</th>
                <th>颜色</th>
                <th>字号</th>
              </tr>
              </thead>
              <tbody>
              <tr>
                <td>Main Head</td>
                <td><span
                >This is an example</span>
                </td>
                <td>bold</td>
                <td>#464c5b</td>
                <td>16px</td>
              </tr>
              <tr>
                <td>Sub Head</td>
                <td><span
                >This is an example</span>
                </td>
                <td>bold</td>
                <td>#464c5b</td>
                <td>14px</td>
              </tr>
              <tr>
                <td>Small Head</td>
                <td><span
                >This is an example</span>
                </td>
                <td>bold</td>
                <td>#464c5b</td>
                <td>12px</td>
              </tr>
              <tr>
                <td>Text</td>
                <td><span
                >This is an example</span></td>
                <td>normal</td>
                <td>#657180</td>
                <td>12px</td>
              </tr>
              <tr>
                <td>Help</td>
                <td><span
                >This is an example</span></td>
                <td>normal</td>
                <td>#9ea7b4</td>
                <td>12px</td>
              </tr>
              <tr>
                <td>Disabled</td>
                <td><span
                >This is an example</span></td>
                <td>normal</td>
                <td>#c3cbd6</td>
                <td>12px</td>
              </tr>
              <tr>
                <td>Link</td>
                <td><a href="#">This is an example</a></td>
                <td>normal</td>
                <td>#3399ff</td>
                <td>12px</td>
              </tr>
              </tbody>
            </table>
          </div>
        </div>
      </article>
    </div>
  )

}

export default NouFound