<template>
  <el-container>
    <el-header>
      <el-menu
        :default-active="activeIndex"
        class="el-menu-demo"
        mode="horizontal"
        @select="handleSelect"
      >
        <el-menu-item index="1"
          ><a :href='main_page' target="_blank">主页</a></el-menu-item
        >
        <!-- <el-submenu index="2">
          <template slot="title">其他服务</template>
          <el-menu-item index="2-1"
            ><a href="https://dl.lchnan.cn" target="_blank"
              >下载站</a
            ></el-menu-item
          >
          <el-menu-item index="2-2"
            ><a href="https://od.lchnan.cn" target="_blank"
              >ODCN</a
            ></el-menu-item
          >
          <el-menu-item index="2-2"
            ><a href="https://bingapi.lchnan.cn" target="_blank"
              >必应美图API</a
            ></el-menu-item
          >
          <el-menu-item index="2-2"
            ><a href="https://img.lchnan.cn" target="_blank"
              >图床</a
            ></el-menu-item
          >
          <el-menu-item index="2-3"
            ><a href="https://lchnan.cn/matrix/MB2Mb.html" target="_blank"
              >MatrixTransfer</a
            ></el-menu-item
          >
        </el-submenu> -->
        <el-menu-item index="2"
          ><a :href=blog_src target="_blank"
            >博客</a
          ></el-menu-item
        >
        
        <el-menu-item index="3"
          ><a :href=github_page target="_blank"
            >Github</a
          ></el-menu-item
        >
      </el-menu>

      <div class="line"></div>
    </el-header>

    <el-main>
      <div class="img">
        <div class="demo-image__placeholder">
          <div class="block">
            <span class="demonstration"></span>
            <el-image :src="src"></el-image>
          </div>
        </div>
      </div>

      <div class="root">
        <el-input
          placeholder="请输入内容"
          v-model="input"
          class="input-with-select"
          @keyup.enter.native="Search"
        >
          <el-select v-model="select" slot="prepend" placeholder="请选择">
            <el-option
              v-for="item in options"
              :key="item.value"
              :label="item.label"
              :value="item.value"
            >
            </el-option>
          </el-select>
          <el-button
            @click="Search()"
            slot="append"
            icon="el-icon-search"
          ></el-button>
        </el-input>
      </div>
      <br/>
      <el-alert title="Beta Ver 2.5 " type="info" show-icon center></el-alert>
    </el-main>

    <el-footer>
      <div>
        CopyRight © 2017-2022 |
        <a
          href="https://status.lchnan.cn"
          target="_blank"
          style="text-decoration: none"
          >Status</a
        >

        <br />
        ICP证:
        <a
          href="https://beian.miit.gov.cn"
          target="_blank"
          style="text-decoration: none"
          >{{Miit}}
        </a>
      </div>
    </el-footer>
  </el-container>
</template>



<script>
import config from '../public/static/config.js'
export default {
  data() {
    return {
      main_page : config.Main_Page,
      blog_src : config.Blog_src,
      github_page : config.Github_src,
      src : config.Src,
      Miit : config.Miit_Gov,
      input: "",
      select: "",
      activeIndex: "1",
      options: [
        {
          value: "1",
          label: "必应",
        },
        {
          value: "2",
          label: "百度无广告",
        },
        {
          value: "3",
          label: "谷歌",
        },
        {
          value: "4",
          label: "WIKI镜像",
        },
      ],
      
    };
  },
  methods: {
    Search() {
      const baidu_url = "http://www.baidu.com/s?tn=baidulocal&wd=";
      const bing_url = "https://cn.bing.com/search?q=";
      const wiki_url = "https://ws.wiki.fallingwaterdesignbuild.com/wiki/";
      const google_url = "https://www.google.com/search?q=";
      let insert = this.input;
      let value = this.select;
      let finurl = "";
      switch (value) {
        case "1":
          finurl = bing_url + insert;
          console.log(finurl);
          window.location.href = finurl;
          break;
        case "2":
          finurl = baidu_url + insert;
          console.log("2");
          window.location.href = finurl;
          break;
        case "3":
          finurl = google_url + insert;
          console.log("3");
          window.location.href = finurl;
          break;
        case "4":
          finurl = wiki_url + insert;
          console.log("4");
          window.location.href = finurl;
          break;
        default:
          finurl = bing_url + insert;
          console.log("defult");
          window.location.href = finurl;
          break;
      }
      finurl = "";
    },
    handleSelect(key, keyPath) {
      console.log(key, keyPath);
    },
  },
};
</script>


<style scoped>
a:link {
  text-decoration: none;
}
.el-select {
  width: 100px;
}
.el-container {
  text-align: center;
}

.el-main {
  min-height: calc(100vh - 240px);
  margin-top: 100px;
  max-width: 100%;
}
.root {
  margin-top: 100px;
}
</style>