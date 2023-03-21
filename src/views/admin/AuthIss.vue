<template>
  <main class="main">
    <div class="container">
      <PageTittle :pageTittle="pageTittle" @clickSidebar="clickSidebar"></PageTittle>
      <h3 class="fw-bolder mt-3">申請權限者名單：</h3>
      <div class="row">
        <div class="col">
          <table
            class="
              table table-light table-striped table-bordered
              border-dark border-5
              text-center
              align-middle
              table-hover
              my-4
            "
          >
            <thead>
              <tr>
                <th scope="col">編號</th>
                <th scope="col">性別</th>
                <th scope="col">法名</th>
                <th scope="col">俗名</th>
                <th scope="col">電話</th>
                <th scope="col">執事堂口</th>
                <th scope="col">執事名稱</th>
                <th scope="col">申請權限日期</th>
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
                <td>知客</td>
                <td>總知客</td>
                <td>8/5</td>
                <td class="d-flex justify-content-around">
                  <button type="button" class="btn btn-primary">核許</button>
                  <button type="button" class="btn btn-outline-danger">
                    拒絕
                  </button>
                </td>
              </tr>

              <tr>
                <th scope="row">2</th>
                <td>女</td>
                <td>普張</td>
                <td>王大信</td>
                <td>0910111222</td>
                <td>知客</td>
                <td>知客志工</td>
                <td>8/5</td>
                <td class="d-flex justify-content-around">
                  <button type="button" class="btn btn-primary">核許</button>
                  <button type="button" class="btn btn-outline-danger">
                    拒絕
                  </button>
                </td>
              </tr>

              <tr>
                <th scope="row">4</th>
                <td>女</td>
                <td>普子師</td>
                <td>王大信</td>
                <td>0910111222</td>
                <td>寮房</td>
                <td>寮房師</td>
                <td>8/5</td>
                <td class="d-flex justify-content-around">
                  <button type="button" class="btn btn-primary">核許</button>
                  <button type="button" class="btn btn-outline-danger">
                    拒絕
                  </button>
                </td>
              </tr>

              <tr>
                <th scope="row">4</th>
                <td>女</td>
                <td>普丁</td>
                <td>王大信</td>
                <td>0910111222</td>
                <td>寮房</td>
                <td>寮房志工</td>
                <td>8/5</td>
                <td class="d-flex justify-content-around">
                  <button type="button" class="btn btn-primary">核許</button>
                  <button type="button" class="btn btn-outline-danger">
                    拒絕
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
      pageTittle: '使用者權限核發',
    };
  },
  methods: {
    clickSidebar() {
      this.$emit('clickSidebar');
    },
  },
};
</script>
