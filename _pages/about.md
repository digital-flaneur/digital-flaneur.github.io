---
layout: default
title: home
permalink: /
---

<div class="section">
  <h2 class="section-title">About Me</h2>
  <p>I am a <strong>builder</strong> passionate about advancing <strong>human-AI collaboration</strong> to improve our <strong>productivity and creativity</strong>. I love studying how people work and building solutions to help them work better. I am currently a machine learning engineer at Adobe, where I build and evaluate agentic systems for data analytics products.</p>

  <br>

  <p>I completed my Ph.D. in Computer Science at Northwestern University, advised by <a href="https://www.mjskay.com/">Matthew Kay</a>. Back in my Ph.D. days, I built adaptive, scalable, and human-centered AI systems for data visualization and education. I also worked across fields and institutions to explore my interdisciplinary interests: I co-directed <a href="https://eaamo-bridges.netlify.app">EAAMO Bridges</a>; I built mortality estimation models at the <a href="https://www.demogr.mpg.de/en">Max Planck Institute for Demographic Research</a>; I developed statistical methods for disparity estimation at <a href="https://reglab.stanford.edu">Stanford's RegLab</a>; I built machine learning solutions for the 988 Lifeline as a <a href="https://www.dssgfellowship.org/">Data Science for Social Good</a> fellow at Carnegie Mellon University.</p>
</div>


<div class="section">
  <h2 class="section-title">Experience</h2>
  <ul class="exp-list">
    <li class="exp-item">
      <div class="exp-header">
        <span class="exp-role">Machine Learning Engineer</span>
        <span class="exp-date">2025 – present</span>
      </div>
      <div class="exp-org">Adobe Inc. · Customer Experience Orchestration</div>
      <div class="exp-desc">Designing and developing agentic systems for Adobe Customer Journey Analytics (B2B product). Developed an AI-based data storytelling solution for Adobe Customer Journey Analytics. Intern project went to production, was demoed to the CEO, and is filed for patent.</div>
      <div class="exp-links"><a href="#">Project (coming soon)</a></div>
    </li>
    <li class="exp-item exp-item--expandable">
      <div class="exp-header">
        <span class="exp-role">Ph.D. Researcher and Engineer</span>
        <span class="exp-date">2020 – 2025</span>
      </div>
      <div class="exp-org">Northwestern University</div>
      <div class="exp-secondary-orgs">Also at: <a href="https://www.dssgfellowship.org/">Carnegie Mellon</a> · <a href="https://reglab.stanford.edu">Stanford</a> · <a href="https://www.demogr.mpg.de/en">Max Planck Institute</a> · <a href="https://fig-x.github.io/workwithus">UMD</a> · <a href="https://consortium.uchicago.edu/">UChicago</a> </div>
      <div class="exp-desc">Designed and developed adaptive, scalable, and human-centered AI systems for data visualization and education. Published 7 full papers at top-tier HCI and data visualization conferences.</div>
      <div class="exp-links">
        <a href="{{ '/publications/' | relative_url }}">Publications</a>
      </div>
      <button class="exp-toggle" id="phd-toggle" aria-expanded="false">
        <span class="exp-toggle-icon">&#9656;</span> See details (5 selected experiences)
      </button>
      <div class="exp-nested" id="phd-details">
        <ul class="exp-list exp-list--nested">
          <li class="exp-item">
            <div class="exp-header">
              <span class="exp-role">Visiting Ph.D. Researcher</span>
              <span class="exp-date">2024 – 2025</span>
            </div>
            <div class="exp-org"><a href="https://fig-x.github.io/workwithus">University of Maryland · FIGX Lab</a></div>
            <div class="exp-desc">Developed an interactive AI-powered system for educational assessment authoring. Led a team of 10+ undergraduate students. Full paper accepted to CHI 2026.</div>
            <div class="exp-links"><a href="#">Ripplet (coming soon)</a></div>
          </li>
          <li class="exp-item">
            <div class="exp-header">
              <span class="exp-role">Social Data Science Researcher</span>
              <span class="exp-date">2024</span>
            </div>
            <div class="exp-org"><a href="https://www.demogr.mpg.de/en">Max Planck Institute for Demographic Research</a></div>
            <div class="exp-desc">Built statistical models to estimate age-specific mortality in a data-scarce context. Coauthored a paper accepted to PAA 2025.</div>
            <div class="exp-links"><a href="{{ '/assets/pdf/mortality_est_paa25.pdf' | relative_url }}">PAA Poster</a></div>
          </li>
          <li class="exp-item">
            <div class="exp-header">
              <span class="exp-role">Graduate Fellow</span>
              <span class="exp-date">2023</span>
            </div>
            <div class="exp-org"><a href="https://reglab.stanford.edu">Stanford University · RegLab</a></div>
            <div class="exp-desc">Designed statistical sampling techniques to estimate racial disparity when data is scarce. Analyzed a healthcare dataset with ~7M Americans' records.</div>
            <div class="exp-links"><a href="#">Project (coming soon)</a></div>
          </li>
          <li class="exp-item">
            <div class="exp-header">
              <span class="exp-role">Data Science Fellow</span>
              <span class="exp-date">2022</span>
            </div>
            <div class="exp-org"><a href="https://www.dssgfellowship.org/">Carnegie Mellon University · DSSG</a></div>
            <div class="exp-desc">Built a machine learning system to improve call routing of the 988 Lifeline, which serves ~2M callers per year.</div>
            <div class="exp-links"><a href="https://github.com/dssg/vibrant_routing_public" target="_blank" rel="noopener">Code</a></div>
          </li>
          <li class="exp-item">
            <div class="exp-header">
              <span class="exp-role">Research Intern</span>
              <span class="exp-date">2022</span>
            </div>
            <div class="exp-org">University of Chicago · Consortium on School Research</div>
            <div class="exp-desc">Built statistical models on Chicago Public Schools data to predict students' graduation rates.</div>
          </li>
        </ul>
      </div>
    </li>
  </ul>
</div>

<div class="section">
  <h2 class="section-title">Selected Publications</h2>
  <ul class="pub-list">
    {% for pub in site.data.publications %}
    {% if pub.selected %}
    <li class="pub-item">
      <div class="pub-title">{{ pub.title }}</div>
      <div class="pub-authors">{{ pub.authors }}</div>
      <div class="pub-venue">
        <span class="pub-tag">{{ pub.abbr }}</span>
        {{ pub.venue }}, {{ pub.year }}
      </div>
      <div class="pub-links">
        {% if pub.pdf %}<a href="{{ '/assets/pdf/' | append: pub.pdf | relative_url }}">Paper</a>{% endif %}
        {% if pub.url and pub.pdf == nil %}<a href="{{ pub.url }}" target="_blank" rel="noopener">Paper</a>{% endif %}
        {% if pub.demo %}<a href="{{ pub.demo }}" target="_blank" rel="noopener">Demo</a>{% endif %}
        {% if pub.code %}<a href="{{ pub.code }}" target="_blank" rel="noopener">Code</a>{% endif %}
        {% if pub.software %}<a href="{{ pub.software }}" target="_blank" rel="noopener">Software</a>{% endif %}
      </div>
    </li>
    {% endif %}
    {% endfor %}
  </ul>
</div>

<div class="section">
  <h2 class="section-title">News</h2>
  <ul class="news-list">
    {% for item in site.data.news limit:5 %}
    <li class="news-item">
      <span class="news-date">{{ item.date | date: "%b %Y" }}</span>
      <span>{{ item.text }}</span>
    </li>
    {% endfor %}
  </ul>
</div>
