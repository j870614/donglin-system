<template>
  <main class="main">
    <div class="container">
      <PageTittle
        :pageTittle="pageTittle"
        @clickSidebar="clickSidebar"
      ></PageTittle>
      <form class="row row-cols-lg-auto d-flex align-items-center g-3 my-3">
        <h3 class="fw-bolder">查詢權限名單：</h3>

        <div class="col-12">
          <label class="visually-hidden" for="inlineFormSelectPref"
            >Preference</label
          >
          <select class="form-select form-select-lg" id="inlineFormSelectPref">
            <option selected>選擇執事堂口名稱</option>
            <option value="">所有執事堂口</option>
            <option value="知客">知客</option>
            <option value="寮房">寮房</option>
            <option value="系統管理員">系統管理員</option>
          </select>
        </div>
      </form>
      <div class="row">
        <div class="col">
          <h3 class="fw-bolder my-3">知客 :</h3>
          <table
            class="
              table table-light table-bordered
              border-dark border-5
              text-center
              align-middle
              table-hover
            "
          >
            <thead>
              <tr>
                <th scope="col">編號</th>
                <th scope="col">性別</th>
                <th scope="col">法名</th>
                <th scope="col">俗名</th>
                <th scope="col">電話</th>
                <th scope="col">執事名稱</th>
                <th scope="col">核發權限者</th>
                <th scope="col">核發權限日期</th>
                <th scope="col">操作</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <th scope="row">1</th>
                <td>男</td>
                <td>普己</td>
                <td>王大信</td>
                <td>0910111222</td>
                <td>總知客</td>
                <td>普甲</td>
                <td>8/5</td>
                <td class="d-flex justify-content-around">
                  <button type="button" class="btn btn-primary">
                    詳細資料
                  </button>
                  <button type="button" class="btn btn-outline-secondary">
                    修改
                  </button>
                  <button type="button" class="btn btn-outline-danger">
                    移除
                  </button>
                </td>
              </tr>

              <tr>
                <th scope="row">2</th>
                <td>女</td>
                <td>普張</td>
                <td>王大信</td>
                <td>0910111222</td>
                <td>知客志工</td>
                <td>普甲</td>
                <td>8/5</td>
                <td class="d-flex justify-content-around">
                  <button type="button" class="btn btn-primary">
                    詳細資料
                  </button>
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

          <h3 class="fw-bolder my-3">寮房 :</h3>
          <table
            class="
              table table-light table-bordered
              border-dark border-5
              text-center
              align-middle
              table-hover
            "
          >
            <thead>
              <tr>
                <th scope="col">編號</th>
                <th scope="col">性別</th>
                <th scope="col">法名</th>
                <th scope="col">俗名</th>
                <th scope="col">電話</th>
                <th scope="col">執事名稱</th>
                <th scope="col">核發權限者</th>
                <th scope="col">核發權限日期</th>
                <th scope="col">操作</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <th scope="row">1</th>
                <td>男</td>
                <td>普子師</td>
                <td>王大信</td>
                <td>0910111222</td>
                <td>寮房師</td>
                <td>普甲</td>
                <td>8/5</td>
                <td class="d-flex justify-content-around">
                  <button type="button" class="btn btn-primary">
                    詳細資料
                  </button>
                  <button type="button" class="btn btn-outline-secondary">
                    修改
                  </button>
                  <button type="button" class="btn btn-outline-danger">
                    移除
                  </button>
                </td>
              </tr>

              <tr>
                <th scope="row">2</th>
                <td>男</td>
                <td>普己</td>
                <td>王大信</td>
                <td>0910111222</td>
                <td>寮房志工</td>
                <td>普甲</td>
                <td>8/5</td>
                <td class="d-flex justify-content-around">
                  <button type="button" class="btn btn-primary">
                    詳細資料
                  </button>
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

          <h3 class="fw-bolder my-3">系統管理員 :</h3>
          <table
            class="
              table table-light table-bordered
              border-dark border-5
              text-center
              align-middle
              table-hover
            "
          >
            <thead>
              <tr>
                <th scope="col">編號</th>
                <th scope="col">性別</th>
                <th scope="col">法名</th>
                <th scope="col">俗名</th>
                <th scope="col">電話</th>
                <th scope="col">執事名稱</th>
                <th scope="col">核發權限者</th>
                <th scope="col">核發權限日期</th>
                <th scope="col">操作</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <th scope="row">1</th>
                <td>男</td>
                <td>普子師</td>
                <td>王大信</td>
                <td>0910111222</td>
                <td>寮房師</td>
                <td>普甲</td>
                <td>8/5</td>
                <td class="d-flex justify-content-around">
                  <button type="button" class="btn btn-primary">
                    詳細資料
                  </button>
                  <button type="button" class="btn btn-outline-secondary">
                    修改
                  </button>
                  <button type="button" class="btn btn-outline-danger">
                    移除
                  </button>
                </td>
              </tr>

              <tr>
                <th scope="row">2</th>
                <td>男</td>
                <td>普己</td>
                <td>王大信</td>
                <td>0910111222</td>
                <td>寮房志工</td>
                <td>普甲</td>
                <td>8/5</td>
                <td class="d-flex justify-content-around">
                  <button type="button" class="btn btn-primary">
                    詳細資料
                  </button>
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
      pageTittle: '使用者權限管理',
    };
  },
  methods: {
    clickSidebar() {
      this.$emit('clickSidebar');
    },
  },
};
</script>
