<template>
  <main class="main">
    <div class="container">
      <PageTittle
        :pageTittle="pageTittle"
        @clickSidebar="clickSidebar"
      ></PageTittle>
      <!-- 年月篩選查詢 -->
      <form class="row align-items-center justify-content-center m-4">
        <div class="col-md-2">
          <select class="form-select form-select-lg">
            <option selected>選擇年份</option>
            <option value="2022">2022</option>
          </select>
        </div>

        <div class="col-md-2">
          <select class="form-select form-select-lg">
            <option selected>選擇月份</option>
            <option value="一月">一月</option>
            <option value="二月">二月</option>
            <option value="三月">三月</option>
          </select>
        </div>

        <div class="col-md-2">
          <button type="button" class="btn btn-primary btn-lg">查詢</button>
        </div>
      </form>

      <!-- 公告卡片區 -->
      <div class="row justify-content-center">
        <div class="col-7" id="posts">
          <h2 class="fw-bolder">2022年 九月</h2>
          <h3 class="fw-bolder mt-5">常住公告：</h3>
          <div class="card my-3 px-4">
            <div class="card-body">
              <h4
                class="card-title text-center fw-bolder my-3
                d-flex justify-content-center align-items-center"
              >
                <img
                  src="img/1.Logo1.png"
                  alt=""
                  width="40"
                  height="60"
                  class="me-3"
                />
                彌陀之家東林寺公告
              </h4>
              <span
                class="badge bg-primary-tint text-primary px-3 py-2 my-2 fs-5"
                >執事異動</span
              >
              <p class="card-text fs-5">普某師：擔任知客師</p>
              <p class="card-text fs-5">普甲師：調任台北念佛會指導法師</p>
              <a href="#" class="btn btn-primary">
                <span class="material-icons-outlined align-middle"
                  >find_in_page</span
                >
                <span class="align-middle">查看公告影本圖檔</span>
              </a>
              <p class="card-text text-center fs-5 fw-bolder p-3">
                2022年9月27日
              </p>
            </div>
          </div>

          <h3 class="fw-bolder mt-5">系統公告：</h3>
          <div class="card my-3 px-4">
            <div class="card-body">
              <h4
                class="card-title text-center fw-bolder my-3 pb-3
                d-flex justify-content-center align-items-center"
              >
                <img
                  src="img/1.Logo1.png"
                  alt=""
                  width="40"
                  height="60"
                  class="me-3"
                />
                系統公告
              </h4>
              <span
                class="badge bg-secondary-tint text-secondary px-3 py-2 my-2 fs-5"
                >系統維護</span
              >
              <p class="card-text fs-5">2022年9月30日 21：00-22：00</p>
              <p class="card-text fs-5">
                進行系統更新及維護，維護時段系統暫時無法登入使用。
              </p>
              <p class="card-text text-center fs-5 fw-bolder p-3">
                2022年9月27日
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </main>
</template>

<script>
export default {
  data() {
    return {
      pageTittle: '歷史公告查詢',
    };
  },
  methods: {
    clickSidebar() {
      this.$emit('clickSidebar');
    },
  },
};
</script>
