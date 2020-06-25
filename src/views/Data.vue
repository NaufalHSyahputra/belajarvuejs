<template>
  <div>
    <!-- Main Content -->
    <div class="main-content">
      <section class="section">
        <div class="section-header">
          <h1>Data Page</h1>
        </div>

        <div class="section-body"></div>
      </section>
    </div>
    <Footer />
  </div>
</template>
<script>
// @ is an alias to /src

export default {
  name: "Data",
  layout: "Default",
  middleware: "Auth"
};
</script>
