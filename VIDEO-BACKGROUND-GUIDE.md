# Video Background Implementation Guide

## ✅ What's Been Implemented

A high-performance, SEO-friendly video background for the Hero section with comprehensive optimizations.

## 📁 File Structure

Place your video files in the `public/` directory:

```
public/
├── videos/
│   ├── hero-background.webm  ← Your WebM video
│   └── hero-background.mp4   ← Your MP4 video (Safari fallback)
└── images/
    └── hero-poster.jpg        ← Poster image (first frame snapshot)
```

## 🎬 How It Works

### 1. Multiple Format Support
- **WebM**: Modern browsers (Chrome, Firefox, Edge)
- **MP4**: Safari and fallback support
- **Poster Image**: Shows immediately for fast First Contentful Paint

### 2. Performance Optimizations

**Lazy Loading**
- `preload="metadata"` - Only loads video metadata initially
- Actual video loads after critical content

**Intersection Observer**
- Video pauses when scrolled out of view
- Saves bandwidth and CPU resources
- Automatically resumes when visible

**Network Detection**
- Slows playback on 2G/slow connections
- Reduces bandwidth usage

**Reduced Motion Support**
- Respects `prefers-reduced-motion` preference
- Hides video for users with motion sensitivity

### 3. SEO Optimizations

**Accessibility**
- `aria-label` for screen readers
- Fallback image for non-video browsers
- Semantic HTML structure

**Core Web Vitals**
- Poster image ensures fast FCP
- No layout shift with explicit dimensions
- GPU-accelerated rendering

## 🔧 Usage

### Basic Implementation (Current)

```astro
<Hero
  headline="Transform Your Digital Future"
  lead="Your tagline here"
  videoWebm="/videos/hero-background.webm"
  videoMp4="/videos/hero-background.mp4"
  videoPoster="/images/hero-poster.jpg"
  image="/images/hero-bg.jpg"
  imageAlt="Evolvenord - Digital Marketing Agency"
  buttonLabel="Start Your Journey"
  buttonHref="/contact"
  showPartners={true}
/>
```

### Image-Only Fallback

If you want to use just an image instead:

```astro
<Hero
  headline="Transform Your Digital Future"
  lead="Your tagline here"
  image="/images/hero-bg.jpg"
  imageAlt="Evolvenord Team"
  buttonLabel="Start Your Journey"
  buttonHref="/contact"
/>
```

## 📊 Performance Best Practices

### Video Optimization Tips

1. **Resolution**: 1920x1080 max for hero backgrounds
2. **Duration**: Keep it short (10-30 seconds) and loop
3. **File Size**: Target under 2MB for WebM, 3-4MB for MP4
4. **Bitrate**: 1-2 Mbps is sufficient for background videos
5. **Frame Rate**: 24-30fps (no need for 60fps)

### Recommended Compression

**For WebM:**
```bash
ffmpeg -i input.mp4 -c:v libvpx-vp9 -b:v 1M -c:a libopus output.webm
```

**For MP4:**
```bash
ffmpeg -i input.mp4 -c:v libx264 -preset slow -crf 28 -c:a aac -b:a 128k output.mp4
```

**For Poster:**
```bash
ffmpeg -i input.mp4 -ss 00:00:00 -vframes 1 -q:v 2 poster.jpg
```

## 🎨 Styling

The video automatically:
- Covers the entire container
- Centers content
- Maintains aspect ratio
- Has a dark overlay (55% opacity) for text legibility

To adjust the overlay, modify the `before:` classes in Hero.astro:
```astro
before:bg-black/55  <!-- Change to /40 for lighter, /70 for darker -->
```

## ♿ Accessibility Features

- **Muted by default**: No audio (required for autoplay)
- **Playsinline**: Prevents fullscreen on mobile
- **Aria-label**: Screen reader description
- **Reduced motion**: Respects user preferences
- **Keyboard navigation**: Standard video controls disabled

## 🐛 Troubleshooting

### Video doesn't play
1. Check file paths match exactly
2. Ensure videos are in `public/` directory
3. Check browser console for errors
4. Verify video codecs are correct

### Video impacts performance
1. Reduce video file size (see compression tips)
2. Lower resolution (1280x720 may be sufficient)
3. Decrease bitrate
4. Consider using image on mobile only

### SEO concerns
- Poster image serves as fallback for crawlers
- All text content is in HTML (not in video)
- Proper semantic markup maintained
- Core Web Vitals optimized

## 📈 Monitoring

Monitor these metrics:
- **LCP (Largest Contentful Paint)**: Should be < 2.5s (poster helps)
- **CLS (Cumulative Layout Shift)**: Should be < 0.1 (video dimensions prevent shift)
- **TBT (Total Blocking Time)**: Video shouldn't block main thread

## 🔄 Future Enhancements

Possible additions:
- Play/pause button for user control
- Quality selector for different bandwidths
- Picture-in-picture support
- Multiple video variants for mobile/desktop

## 📝 Notes

- Videos must be publicly accessible (in `public/` folder)
- Videos autoplay without sound (browser requirement)
- Background videos should be subtle and not distract from content
- Always test on mobile devices and slow connections

---

**Implementation Status**: ✅ Complete and Production Ready
**Performance Impact**: Minimal (with optimizations applied)
**Browser Support**: All modern browsers + graceful fallbacks

