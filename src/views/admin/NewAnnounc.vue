<template>
  <main class="main">
    <div class="container">
      <PageTittle
        :pageTittle="pageTittle"
        @clickSidebar="clickSidebar"
      ></PageTittle>
      <form class="row d-flex align-items-center g-3 m-3 postForm">
        <label for="datepicker" class="fs-3 fw-bolder col-sm-2 col-form-label"
          >公告日期：</label
        >
        <div class="col-3">
          <input
            type="text"
            class="form-control form-control-lg datepicker"
            id="datepicker"
            placeholder="選擇日期"
            aria-label="選擇日期"
          />
        </div>

        <fieldset class="col-md-12 g-3 d-flex align-items-center">
          <legend
            class="col-sm-2 col-form-label col-form-label-lg fs-3 fw-bolder"
          >
            公告類別：
          </legend>
          <div
            class="form-check form-check-inline d-inline-flex align-items-center"
          >
            <input
              class="form-check-input"
              type="radio"
              name="postOptions"
              id="post-temple"
              value="常住公告"
            />
            <label class="form-check-label fs-4 ms-3" for="post-temple"
              >常住公告</label
            >
          </div>
          <div
            class="form-check form-check-inline d-inline-flex align-items-center ms-4"
          >
            <input
              class="form-check-input"
              type="radio"
              name="postOptions"
              id="post-system"
              value="系統公告"
            />
            <label class="form-check-label fs-4 ms-3" for="post-system"
              >系統公告</label
            >
          </div>
        </fieldset>

        <div class="row">
          <div class="col-md-3 g-3">
            <select class="form-select form-select-lg">
              <option selected>公告性質</option>
              <option value="執事異動">執事異動</option>
              <option value="寺務公告">寺務公告</option>
              <option value="會議記錄">會議記錄</option>
            </select>
          </div>
        </div>

        <div class="col-sm-5 g-3">
          <input type="file" id="actual-btn" hidden />
          <label for="actual-btn" class="btn btn-primary btn-lg">
            <span class="material-icons-outlined align-middle"
              >cloud_upload</span
            >
            <span class="align-middle">上傳常住公告電子檔</span>
          </label>
        </div>

        <div class="col-12 g-3">
          <label
            for="post-Content"
            class="fs-3 fw-bolder col-sm-2 col-form-label m-0"
            >公告內容：</label
          >
          <textarea class="form-control" id="post-Content" rows="5"></textarea>
        </div>

        <div class="row justify-content-center g-3">
          <div class="col-2">
            <button class="btn btn-primary btn-lg" id="sendPost">
              發布公告
            </button>
          </div>
        </div>
      </form>
    </div>
  </main>
</template>

<script>
export default {
  data() {
    return {
      pageTittle: '新增公告',
    };
  },
  methods: {
    clickSidebar() {
      this.$emit('clickSidebar');
    },
  },
};
</script>
