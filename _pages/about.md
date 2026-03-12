---
layout: default
title: home
permalink: /
---

<div class="profile-section">
  <div class="profile-header">
    <img src="{{ '/assets/img/prof_pic.jpg' | relative_url }}" alt="Charles Cui" class="profile-photo">
    <div>
      <h1>Charles Cui</h1>
      <p class="subtitle">Ph.D. in Computer Science &middot; Northwestern University</p>
    </div>
  </div>
  <div class="bio">
    <p>I am a researcher passionate about advancing <strong>human-AI collaboration</strong> to improve our productivity and creativity. I completed my Ph.D. in Computer Science at Northwestern University, advised by <a href="https://www.mjskay.com/">Matthew Kay</a>. My thesis research includes using <strong>data science</strong> methods and <strong>large language models</strong> to build <strong>adaptive, scalable, and human-centered technology for data visualization and education</strong>.</p>
    <p>I also worked across institutions to explore my interdisciplinary interests: I co-directed <a href="https://eaamo-bridges.netlify.app">EAAMO Bridges</a>, a community that leverages computational methods to improve welfare for marginalized groups. I studied mortality estimation at the <a href="https://www.demogr.mpg.de/en">Max Planck Institute for Demographic Research</a>. I developed statistical methods for disparity estimation at <a href="https://reglab.stanford.edu">Stanford's RegLab</a>. I also built machine learning solutions for the 988 Lifeline as a <a href="https://www.dssgfellowship.org/">Data Science for Social Good</a> fellow at Carnegie Mellon University.</p>
  </div>
  <div class="profile-social">
    <a href="https://github.com/{{ site.github_username }}" target="_blank" rel="noopener">GitHub</a>
    <a href="https://scholar.google.com/citations?user={{ site.scholar_userid }}" target="_blank" rel="noopener">Scholar</a>
    <a href="https://www.linkedin.com/in/{{ site.linkedin_username }}" target="_blank" rel="noopener">LinkedIn</a>
    <a href="mailto:{{ site.author.email }}">Email</a>
  </div>
</div>

<div class="section">
  <h2 class="section-title">Experience</h2>
  <ul class="exp-list">
    <li class="exp-item">
      <div class="exp-header">
        <span class="exp-role">Machine Learning Engineer</span>
        <span class="exp-date">2026 – present</span>
      </div>
      <div class="exp-org">Adobe Inc. · Customer Experience Orchestration</div>
      <div class="exp-desc">Designing and developing agentic systems for Adobe Customer Journey Analytics (B2B product).</div>
      <div class="exp-links"><a href="#">Project (coming soon)</a></div>
    </li>
    <li class="exp-item">
      <div class="exp-header">
        <span class="exp-role">Ph.D. Researcher</span>
        <span class="exp-date">2020 – 2025</span>
      </div>
      <div class="exp-org">Northwestern University</div>
      <div class="exp-desc">Designed and developed adaptive, scalable, and human-centered AI systems for data visualization and education. Published 7 full papers at top-tier HCI and data visualization conferences.</div>
      <div class="exp-links">
        <a href="{{ '/publications/' | relative_url }}">Publications</a>
      </div>
    </li>
    <li class="exp-item">
      <div class="exp-header">
        <span class="exp-role">Machine Learning Engineer Intern</span>
        <span class="exp-date">2025</span>
      </div>
      <div class="exp-org">Adobe Inc. · Digital Experience</div>
      <div class="exp-desc">Developed an AI-based data storytelling solution for Adobe Customer Journey Analytics. Intern project went to production, was demoed to the CEO, and is filed for patent.</div>
      <div class="exp-links"><a href="#">Project (coming soon)</a></div>
    </li>
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
    <li class="exp-item">
      <div class="exp-header">
        <span class="exp-role">Undergraduate Researcher</span>
        <span class="exp-date">2019</span>
      </div>
      <div class="exp-org">University of Maryland · REU</div>
      <div class="exp-desc">Developed a machine learning model for advance healthcare directives with active learning algorithms.</div>
      <div class="exp-links"><a href="{{ '/assets/pdf/alg_proxy.pdf' | relative_url }}">Paper</a></div>
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
        {% if pub.pdf %}<a href="{{ '/assets/pdf/' | append: pub.pdf | relative_url }}">PDF</a>{% endif %}
        {% if pub.url %}<a href="{{ pub.url }}" target="_blank" rel="noopener">Link</a>{% endif %}
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
