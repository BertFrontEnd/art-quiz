import { QComponent } from '../../structure/index.js';

class AppFooter extends QComponent {
  constructor(config) {
    super(config);
  }
}

export const appFooter = new AppFooter({
  selector: '#app-footer',
  template: `
    <nav>
      <ul id="footer-nav">
        <li><a href="https://github.com/BertFrontEnd/" target="_blank" class="author">BertFrontEnd</a></li>
        <li><a href="https://www.youtube.com/watch?v=YF2vrolwcR4" target="_blank" class="year">2021</a></li>
        <li><a href="https://rs.school/js/" target="_blank" class="rsschool">RSSchool</a></li>
      </ul>
    </nav>
`,
});
