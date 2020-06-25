<template>
  <div>
    <!-- Main Content -->
    <div class="main-content">
      <section class="section">
        <div class="section-header">
          <h1>Blank Page</h1>
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
  name: "Home",
  layout: "Default",
  middleware: "Auth"
};
</script>
