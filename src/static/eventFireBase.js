const observer = new PerformanceObserver((list) => {
    for (const entry of list.getEntries()) {
      const metricName = entry.name;

      if (entry.entryType === 'paint') {
        const time = Math.round(entry.startTime + entry.duration);
        gtag('event', 'PagePerformance', {
          [metricName]: time,
        });
      } else if (entry.entryType === 'navigation') {
        const totalAppLoadTime = Math.round(entry.responseEnd - entry.requestStart);
        const serverLatency = Math.round(entry.responseStart - entry.requestStart);
        const downloadTime = Math.round(entry.responseEnd - entry.responseStart);
        
        gtag('event', 'PagePerformance', {
          TotalAppLoadTime: totalAppLoadTime,
          ServerLatency: serverLatency,
          DownloadTime: downloadTime,
        });
      }
    }
  });

  observer.observe({ entryTypes: ['paint', 'navigation'] });