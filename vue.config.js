module.exports = {
  pluginOptions: {
    s3Deploy: {
      assetPath: 'dist',
      bucket: 'penoplaster83',
      region: 'us-east-1',
      pwa: false,
      enableCloudfront: false,
      uploadConcurrency: 5
    }
  }
}
