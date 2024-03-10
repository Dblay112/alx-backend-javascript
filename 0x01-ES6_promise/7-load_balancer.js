export default function loadBalancer(chinaDownload, USDownload) {
  return Promise.race([chinaeDownload, USDownload]);
}
