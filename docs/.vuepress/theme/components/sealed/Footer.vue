<template>


	<footer class="footer">
    <b-container>
      <b-row>

				<b-col
					sm="12"
          md="6"
					xl="2"
          class="footer__logo-wrapper outbound-negative-space-fix mt-md-0"
				>
					<div class="">
						<img src='/icons/tagion-logo.png' class="footer__logo" alt="Tagion Logo">
					</div>
				</b-col>

        <b-col
          sm="12"
          md="6"
					xl="3"
          class="outbound-negative-space-fix mt-8 mt-md-0"
        >
          <h6 class="mb-3">Quicklinks</h6>
          <b-nav vertical>
            <li>
              <a
                href="https://forum.tagion.org/t/tagion-faq"
                @click="$analytics.triggerEvent({category: 'Exploration', action: 'FAQVisit', fields: {placement: 'Footer'}})"
                target="_blank"
                rel="noopener noreferrer nofollow"
              >
                FAQ
                <OutboundLink />
              </a>
            </li>
						<li>
              <a
                href="https://https://github.com/tagion"
                @click="$analytics.triggerEvent({category: 'Exploration', action: 'FAQVisit', fields: {placement: 'Footer'}})"
                target="_blank"
                rel="noopener noreferrer nofollow"
              >
                Github
                <OutboundLink />
              </a>
            </li>
            <li>
              <a
                target="_blank"
                href="https://forum.tagion.org/"
              >Forum
                <OutboundLink /></a>
            </li>
            <li>
              <a
                href="https://github.com/tagion/resources/raw/master/whitepaper/tagion-whitepaper.pdf"
                @click="$analytics.triggerEvent({category: 'Exploration', action: 'WhitepaperDownload', fields: {placement: 'Footer'}})"
              >
								White Paper
                <DownloadLink />
							</a>
            </li>
            <li>
              <a
                href="https://github.com/tagion/resources/raw/master/technical-paper/tagion-technical-paper.pdf"
                @click="$analytics.triggerEvent({category: 'Exploration', action: 'TechpaperDownload', fields: {placement: 'Footer'}})"
              >
                Technical Paper
                <DownloadLink />
              </a>
            </li>

          </b-nav>
        </b-col>

        <b-col
					class="mt-8 mt-xl-0 contact-tagion outbound-negative-space-fix"
					sm="12"
          md="6"
					xl="3"
				>
          <div>
						<h6 class="contact-tagion__contact">Contact</h6>

						<b-nav vertical>
							<div>info@tagion.org</div>
							<div>support@tagion.org</div>
						</b-nav>
					</div>

					<div class="contact-tagion__tagion-wrapper">
						<h6 class="contact-tagion__tagion">Tagion</h6>

						<b-nav vertical>
							<div>Huginsvej 3B</div>
							<div>3400 Hillerød</div>
							<div>Denmark</div>
						</b-nav>
					</div>
        </b-col>

				<b-col
					class="mt-8 mt-xl-0 inv-rel outbound-negative-space-fix"
					sm="12"
          md="6"
					xl="4"
				>
          <h6 class="mb-3">Investor Relations</h6>

          <b-nav vertical>
						<div>ir@i25s.com</div>
          </b-nav>

          <h6 class="mt-6 mb-3">Channels</h6>
          <social-buttons
            class="mb-3 mt-3"
            dark
          />
          <!-- <p class="mb-1"><small>By joining, you agree with our <router-link to="/meta/privacy-policy"><u>Privacy Policy</u></router-link>.</small></p>
          <newsletter-form class="footer-newsletter" /> -->
        </b-col>

      </b-row>

      <b-row class="mt-10 align-items-md-center">
        <b-col cols="12">
          <div class="d-flex align-items-start">
            <!-- <img
              class="footer__logo"
              src="/logo.svg"
              alt="Tagion Logo"
            /> -->
            <ul class="list-group-transparent list-group-flush list-group-borderless mb-0 text-muted">
							<div class="list-inline">
								<div class="list-inline-wrapper-top">
									<li class="list-inline-item pl-0 pr-4 my-1">© Tagion, 2020. All rights reserved.</li>
								</div>

								<div class="list-inline-wrapper-bottom">
									<li class="list-inline-item pl-0 pr-4 my-1">
										<router-link to="/meta/privacy-policy">Privacy Policy</router-link>
									</li>
									<li class="list-inline-item pl-0 pr-4 my-1">
										<router-link to="/meta/cookie-policy">Cookie Policy</router-link>
									</li>
									<li class="list-inline-item pl-0 pr-4 my-1">
										<router-link to="/meta/terms-of-use">Terms of Use</router-link>
									</li>
								</div>
							</div>
            </ul>
          </div>
        </b-col>
      </b-row>
    </b-container>
  </footer>




  <!-- <footer class="footer"> -->
    <!-- <b-container>
      <b-row>
        <b-col
          cols="12"
          sm="6"
          xl="4"
          class="outbound-negative-space-fix mt-8 mt-sm-0"
        >
          <h6 class="mb-3">Quick Links</h6> -->
          <!-- <b-nav vertical>
            <li>
              <a
                href="https://forum.tagion.org/t/tagion-faq"
                @click="$analytics.triggerEvent({category: 'Exploration', action: 'FAQVisit', fields: {placement: 'Footer'}})"
                target="_blank"
                rel="noopener noreferrer nofollow"
              >
                FAQ
                <OutboundLink />
              </a>
            </li>
            <li>
              <a
                target="_blank"
                href="https://forum.tagion.org/"
              >Official Forum
                <OutboundLink /></a> -->
            <!-- </li>
            <li>
              <a
                href="https://github.com/tagion/resources/raw/master/whitepaper/tagion-whitepaper.pdf"
                @click="$analytics.triggerEvent({category: 'Exploration', action: 'WhitepaperDownload', fields: {placement: 'Footer'}})"
              >Whitepaper
                <DownloadLink /></a>
            </li>
            <li>
              <a
                href="https://github.com/tagion/resources/raw/master/technical-paper/tagion-technical-paper.pdf"
                @click="$analytics.triggerEvent({category: 'Exploration', action: 'TechpaperDownload', fields: {placement: 'Footer'}})"
              >
                Technical Paper
                <DownloadLink />
              </a>
            </li>

          </b-nav>
        </b-col>

        <b-col class="mt-8 mt-sm-0 mt-xl-0 outbound-negative-space-fix">
          <h6 class="mb-3">Contact</h6>
          <b-nav vertical>
            <li>
              <a href="mailto:info@tagion.org">
                info@tagion.org
                <OutboundLink />
              </a>
            </li>
            <li> -->
              <!-- <a href="mailto:support@tagion.org">
                support@tagion.org -->
                <!-- <OutboundLink />
              </a>
            </li>
          </b-nav>
        </b-col>
        <b-col
          class="col-newsletter mt-8 mt-xl-0 outbound-negative-space-fix"
          cols=12
          xl=4
        >
          <h6 class="mb-3">Communication Channels</h6>
          <social-buttons
            class="mb-3 mt-3"
            dark
          />
          <p class="mb-1"><small>By joining, you agree with our <router-link to="/meta/privacy-policy"><u>Privacy Policy</u></router-link>.</small></p>
          <newsletter-form class="footer-newsletter" />

        </b-col>
      </b-row>

      <b-row class="mt-10 align-items-md-center">
        <b-col cols="12">
          <div class="d-flex align-items-start">
            <img
              class="footer__logo"
              src="/logo.svg"
              alt="Tagion Logo"
            />
            <ul class="list-inline list-group-transparent list-group-flush list-group-borderless mb-0 text-muted">
              <li class="list-inline-item pl-0 pr-4 my-1">© Tagion, 2020. All rights reserved.</li>
              <li class="list-inline-item pl-0 pr-4 my-1">
                <router-link to="/meta/privacy-policy">Privacy Policy</router-link>
              </li>
              <li class="list-inline-item pl-0 pr-4 my-1">
                <router-link to="/meta/cookie-policy">Cookie Policy</router-link>
              </li>
              <li class="list-inline-item pl-0 pr-4 my-1">
                <router-link to="/meta/terms-of-use">Terms of Use</router-link>
              </li>
            </ul>
          </div>
        </b-col>
      </b-row>
    </b-container> -->
  <!-- </footer> -->


</template>

<script>
import NewsletterForm from "./NewsletterForm";
import SocialButtons from "./SocialButtons";
import DownloadLink from "./DownloadLink";

export default {
  components: {
    NewsletterForm,
    SocialButtons,
    DownloadLink
  }
};
</script>
