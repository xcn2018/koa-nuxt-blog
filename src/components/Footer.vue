<template>
  <v-footer height="auto">
    <v-card class="flex" flat tile>
      <v-card-title class="grey darken-1">
        <strong class="subheading">welcome to connect me!</strong>

        <v-spacer></v-spacer>

        <v-btn  dark icon href="mailto:dongxianlin@vadxq.com">
          <v-icon size="32" color="white">mail_outline</v-icon>
        </v-btn>
        <v-btn icon href="https://github.com/vadxq">
          <img src="@/assets/imgs/GitHub.png">
        </v-btn>
        <v-btn icon href="https://weibo.com/vadxq/">
          <img src="@/assets/imgs/weibo.png">
        </v-btn>
        <v-btn icon href="https://twitter.com/vadxq">
          <img src="@/assets/imgs/Twitter.png">
        </v-btn>
        <!-- <v-btn icon>
          <img src="@/assets/imgs/zhihu.png">
        </v-btn> -->
        <!-- <v-btn icon>
          <img src="@/assets/imgs/QQ.png">
        </v-btn> -->
        <v-btn icon href="https://space.bilibili.com/9857219">
          <img src="@/assets/imgs/bilibili.png">
        </v-btn>
        <!-- <v-btn icon>
          <img src="@/assets/imgs/Facebook.png">
        </v-btn> -->
      </v-card-title>

      <v-card-actions class="grey darken-10 justify-center">
          <p>本站距离十年老站还须努力{{10 - (nowyear - 2016)}}年</p>
      </v-card-actions>
      <v-card-actions class="grey darken-10 justify-center">
          <p>赣ICP备16004519号-1 &copy;{{nowyear}}
            PoweredBy <strong>vadxq</strong>
          </p>
      </v-card-actions>
    </v-card>
  </v-footer>
</template>

<script>
export default {
  data() {
    return {
      nowyear: new Date().getFullYear()
    }
  }
}
</script>

<style scoped>
img {
  margin-top: -10%;
  display: inline-flex;
  width: 3.5rem;
}
</style>


