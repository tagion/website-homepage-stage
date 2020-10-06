<template>
	<div class="people">
		<b-container class="people-wrapper">
			<div class="people-left">
				<h2> The Team Behind Tagion </h2>

				<img src="/icons/line-icon.png" class="people-left__img">

				<p class="people-left__text paragraph1">
					Tagion is an open-source project with members contributing from all over the planet. The company currently
					funding and developing Tagion, I25s, is located in Denmark and Ukraine. Currently, there are 15+ full-time
					resources working on the Tagion project.
				</p>

				<img src="/icons/line-icon.png" class="people-left__img">
			</div>

			<div class="people-right">
				<b-tabs class="people-right__b-tabs" align="center">

					<b-tab title="Management" active>
						<reveal class="team-table">
							<b-row class="row--big-gutter my-4 justify-content-center">
								<b-col
									v-for="(teamMember, index) in teamMembers"
									cols="12"
								>
									<reveal
										child
										opacity
										direction="left"
										:delay="50 * index"
									>
										<team-card
											:name="teamMember.name"
											:title="teamMember.title"
											:image="teamMember.image"
											:link="teamMember.link"
											:about="teamMember.about"
										></team-card>
									</reveal>
								</b-col>
							</b-row>
						</reveal>
					</b-tab>

					<b-tab title="Advisors">
						<reveal class="team-table">
							<b-row class="row--big-gutter justify-content-center">
								<b-col
									v-for="(teamMember, index) in advisers"
									cols="12"
								>
									<reveal
										child
										opacity
										direction="left"
										:delay="50 * index"
									>
										<team-card
											:name="teamMember.name"
											:title="teamMember.title"
											:image="teamMember.image"
											:link="teamMember.link"
											:about="teamMember.about"
										>
										</team-card>
									</reveal>
								</b-col>
							</b-row>
						</reveal>
					</b-tab>

				</b-tabs>
			</div>
		</b-container>
	</div>
</template>

<script>
	import Reveal from "@theme/components/transition/Reveal";
	import BrandButton from "@theme/components/sealed/BrandButton";
	import TeamCard from "@theme/components/sealed/TeamCard";

	import { teamMembers, advisers } from "@theme/data";

	export default {
  data() {
    return {
      teamMembers,
      advisers,
      selectedTeamMember: undefined,
    };
  },
  components: {
		BrandButton,
		TeamCard,
    Reveal,
  },
};
</script>

<style src="../../styles/people-component.scss" lang="scss"></style>
