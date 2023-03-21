<template>
  <main class="main">
    <div class="container">
      <PageTittle
        :pageTittle="pageTittle"
        @clickSidebar="clickSidebar"
      ></PageTittle>
      <div class="row">
        <div class="col">
          <table
            class="table table-light table-striped table-bordered
            border-dark border-5 text-center align-middle table-hover my-4"
          >
            <thead>
              <tr>
                <th scope="col">報名序號</th>
                <th scope="col">俗名</th>
                <th scope="col">性別</th>
                <th scope="col">電話</th>
                <th scope="col">出生年月日</th>
                <th scope="col">狀態</th>
                <th scope="col">登入/修改者</th>
                <th scope="col">登入/修改日期</th>
                <th scope="col">修改</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <th scope="row">1</th>
                <td>王大信</td>
                <td>男</td>
                <td>0910111222</td>
                <td>1988/10/1</td>
                <td>
                  <span
                    class="badge bg-primary-tint text-primary px-3 py-2 fs-6"
                  >
                  新登錄報名</span
                  >
                </td>
                <td>總知客</td>
                <td>8/5</td>
                <td class="d-flex justify-content-around">
                  <button type="button" class="btn btn-outline-primary">
                    修改
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
      pageTittle: '皈依報名名單',
    };
  },
  methods: {
    clickSidebar() {
      this.$emit('clickSidebar');
    },
  },
};
</script>
