<template>
  <main class="main">
    <div class="container">
      <PageTittle
        :pageTittle="pageTittle"
        @clickSidebar="clickSidebar"
      ></PageTittle>
      <form class="row row-cols-lg-auto d-flex align-items-center g-3 mt-5">
        <h3 class="fw-bolder">選擇年度：</h3>

        <div class="col-12">
          <label class="visually-hidden" for="inlineFormSelectPref"
            >Preference</label
          >
          <select class="form-select form-select-lg" id="inlineFormSelectPref">
            <option value="2022">2022</option>
          </select>
        </div>

        <div class="col-12 ms-auto">
          <button
            type="button"
            class="btn btn-primary btn-lg"
            data-bs-toggle="modal"
            data-bs-target="#createYearBuddhaSevenModal"
          >
            新增佛七期數
          </button>
        </div>
      </form>
      <!-- 佛七期數總表 -->
      <div class="row">
        <div class="col">
          <table
            class="table table-light table-bordered border-dark border-5
            text-center align-middle table-hover my-3"
          >
            <thead>
              <tr>
                <th scope="col" width="5%">期數</th>
                <th scope="col" width="10%">起七日</th>
                <th scope="col" width="10%">圓滿日</th>
                <th scope="col" width="15%">備註</th>
                <th scope="col" width="10%">操作</th>
              </tr>
            </thead>
            <tbody id="thisYearBuddha7">
              <tr>
                <th scope="row">442</th>
                <td>2022/9/1</td>
                <td>2022/9/7</td>
                <td></td>
                <td class="d-flex justify-content-evenly">
                  <button type="button" class="btn btn-outline-secondary">
                    修改
                  </button>
                  <button type="button" class="btn btn-outline-danger">
                    移除
                  </button>
                </td>
              </tr>

              <tr>
                <th scope="row">443</th>
                <td>2022/9/11</td>
                <td>2022/9/17</td>
                <td></td>
                <td class="d-flex justify-content-evenly">
                  <button type="button" class="btn btn-outline-secondary">
                    修改
                  </button>
                  <button type="button" class="btn btn-outline-danger">
                    移除
                  </button>
                </td>
              </tr>
            </tbody>
          </table>

          <h4 class="fw-bolder mt-5">已圓滿：</h4>
          <table
            class="table table-light table-bordered
            border-dark border-5 text-center align-middle
            table-hover my-4"
          >
            <thead>
              <tr>
                <th scope="col" width="5%">期數</th>
                <th scope="col" width="10%">起七日</th>
                <th scope="col" width="10%">圓滿日</th>
                <th scope="col" width="15%">備註</th>
                <th scope="col" width="10%">操作</th>
              </tr>
            </thead>
            <tbody id="finished">
              <tr>
                <th scope="row">418</th>
                <td>2022/1/1</td>
                <td>2022/1/7</td>
                <td></td>
                <td class="d-flex justify-content-evenly">
                  <button type="button" class="btn btn-outline-secondary">
                    修改
                  </button>
                  <button type="button" class="btn btn-outline-danger">
                    移除
                  </button>
                </td>
              </tr>

              <tr>
                <th scope="row">419</th>
                <td>2022/1/11</td>
                <td>2022/1/17</td>
                <td></td>
                <td class="d-flex justify-content-evenly">
                  <button type="button" class="btn btn-outline-secondary">
                    修改
                  </button>
                  <button type="button" class="btn btn-outline-danger">
                    移除
                  </button>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  </main>
</template>

<script>
export default {
  data() {
    return {
      pageTittle: '佛七期數設定',
    };
  },
  methods: {
    clickSidebar() {
      this.$emit('clickSidebar');
    },
  },
};
</script>
