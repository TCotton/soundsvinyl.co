<template>
	<header :class="$style.navHeader">
		<div :class="$style.navLeftColumn">
			<router-link to="/">
				<h1>
					SoundsVinyl
				</h1>
			</router-link>
		</div>
		<div :class="$style.navRightColumn">
			<router-link to="/admin">
				<p>
					Home
				</p>
			</router-link>
			<p>
				<a @click="$router.go(-1)">Back</a>
			</p>
			<router-link to="/admin">
				<p @click="logout">
					Logout
				</p>
			</router-link>
		</div>
	</header>
</template>

<script>
export default {
	name: 'HeaderAdmin',
	methods: {
		logout (e) {
			e.preventDefault()

			if (this.$cookies.isKey('token')) {
				this.$cookies.remove('token')
			}

			this.$router.push('Home')
		}
	}
}
</script>

<style lang="scss" module>
@import '../../assets/sass/tools';

.navHeader {
	display: grid;
	grid-template-columns: 50% 50%;
	grid-gap: 0;
}

.navLeftColumn {
	display: flex;
	align-items: center;
	justify-content: flex-start;
}

.navRightColumn {
	display: flex;
	align-items: center;
	justify-content: flex-end;

	> p {
		padding: 0 20px 0 0;
	}

	> a:first-of-type p {
		padding: 0 20px 0 0;
	}
}
</style>
