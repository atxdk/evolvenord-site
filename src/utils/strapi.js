// src/utils/strapi.js

// Import environment variables
const STRAPI_URL = import.meta.env.STRAPI_URL;
const STRAPI_TOKEN = import.meta.env.STRAPI_TOKEN;

/**
 * A helper function to make GET requests to the Strapi API.
 * @param {string} path - The API endpoint path (e.g., "/api/pages").
 * @param {URLSearchParams} params - The URL parameters.
 * @returns {Promise<any>} - The JSON response from the API.
 */
async function fetchApi(path, params) {

    const url = new URL(`${STRAPI_URL}${path}`);
    url.search = params.toString();

    try {
    const response = await fetch(url.toString(), {
      headers: {
        'Authorization': `Bearer ${STRAPI_TOKEN}`
      }
    });

    if (!response.ok) {
      console.error("Strapi API Response Error:", await response.text());
      throw new Error(`Failed to fetch from Strapi: ${response.status} ${response.statusText}`);
    }

    const data = await response.json();
    return data;

  } catch (error) {
    console.error("Error fetching from Strapi:", error);
    return null;
  }
}

/**
 * Fetches a single page by its slug from the Strapi API.
 * It uses the 'populate=deep' parameter to fetch all dynamic zone components and their nested relations.
 * @param {string} slug - The slug of the page to fetch.
 * @returns {Promise<Object|null>} - The page data or null if not found.
 */
export async function getPageBySlug(slug) {
  // If the slug is undefined or empty, we default to "homepage"
  const pageSlug = !slug ? "homepage" : slug;

  const params = new URLSearchParams();
  params.append("filters[slug][$eq]", pageSlug);
  params.append("pLevel", "5"); // Use the populate-deep plugin's parameter

  const response = await fetchApi("/api/pages", params);
  
  // The API returns an array, so we return the first item.
  if (response && response.data && response.data.length > 0) {
    return response.data[0];
  }
  
  return null;
}

/**
 * Fetches all page slugs to be used by Astro's getStaticPaths function.
 * @returns {Promise<Array<{ params: { slug: string | undefined } }>>} - An array of slug objects for Astro.
 */
export async function getAllPageSlugs() {
  const params = new URLSearchParams();
  params.append("fields[0]", "slug");

  const response = await fetchApi("/api/pages", params);

  if (response && response.data) {
    // UPDATED LOGIC HERE
    return response.data.map((page) => {
      // Access page.slug directly, not page.attributes.slug
      const slug = page.slug === 'homepage' ? undefined : page.slug;
      return {
        params: { slug: slug },
      };
    });
  }

  return [];
}

export async function getAllPageSlugs() {
  const params = new URLSearchParams();
  params.append("fields[0]", "slug");

  const response = await fetchApi("/api/pages", params);

  if (response && response.data) {
    // UPDATED LOGIC HERE
    return response.data.map((page) => {
      // Access page.slug directly, not page.attributes.slug
      const slug = page.slug === 'homepage' ? undefined : page.slug;
      return {
        params: { slug: slug },
      };
    });
  }

  return [];
}

export async function getAllPageSlugs() {
  const params = new URLSearchParams();
  params.append("fields[0]", "slug");

  const response = await fetchApi("/api/pages", params);

  if (response && response.data) {
    // UPDATED LOGIC HERE
    return response.data.map((page) => {
      // Access page.slug directly, not page.attributes.slug
      const slug = page.slug === 'homepage' ? undefined : page.slug;
      return {
        params: { slug: slug },
      };
    });
  }

  return [];
}

export async function getAllPageSlugs() {
  const params = new URLSearchParams();
  params.append("fields[0]", "slug");

  const response = await fetchApi("/api/pages", params);

  if (response && response.data) {
    // UPDATED LOGIC HERE
    return response.data.map((page) => {
      // Access page.slug directly, not page.attributes.slug
      const slug = page.slug === 'homepage' ? undefined : page.slug;
      return {
        params: { slug: slug },
      };
    });
  }

  return [];
}

export async function getAllPageSlugs() {
  const params = new URLSearchParams();
  params.append("fields[0]", "slug");

  const response = await fetchApi("/api/pages", params);

  if (response && response.data) {
    // UPDATED LOGIC HERE
    return response.data.map((page) => {
      // Access page.slug directly, not page.attributes.slug
      const slug = page.slug === 'homepage' ? undefined : page.slug;
      return {
        params: { slug: slug },
      };
    });
  }

  return [];
}

export async function getAllPageSlugs() {
  const params = new URLSearchParams();
  params.append("fields[0]", "slug");

  const response = await fetchApi("/api/pages", params);

  if (response && response.data) {
    // UPDATED LOGIC HERE
    return response.data.map((page) => {
      // Access page.slug directly, not page.attributes.slug
      const slug = page.slug === 'homepage' ? undefined : page.slug;
      return {
        params: { slug: slug },
      };
    });
  }

  return [];
}

export async function getAllPageSlugs() {
  const params = new URLSearchParams();
  params.append("fields[0]", "slug");

  const response = await fetchApi("/api/pages", params);

  if (response && response.data) {
    // UPDATED LOGIC HERE
    return response.data.map((page) => {
      // Access page.slug directly, not page.attributes.slug
      const slug = page.slug === 'homepage' ? undefined : page.slug;
      return {
        params: { slug: slug },
      };
    });
  }

  return [];
}

export async function getSiteSettings() {
  const params = new URLSearchParams();
  params.append("pLevel", "5"); // Use "deep" for v4 or the appropriate plugin for v5

  // The API endpoint for a single type is just its name
  const response = await fetchApi("/api/site-setting", params);
  
  if (response && response.data) {
    // Single types return a single object, not an array
    return response.data.attributes;
  }
  
  return null;
}
