<script>
    import {ContentCard} from "../ContentSnippet.svelte";
</script>

{@render ContentCard(
    [{
        href: "https://www.credly.com/badges/9154a3c4-935b-4377-8550-ee67e857d48a",
        title: "AWS CCP Certification",
        src: "https://cloud.swrigdon.com/s/XgTYBeHWzHABsDS/preview",
        alt: "AWS CCP Cert Badge"
    }],
    {
        heading: "Certified Cloud Practitioner - Amazon Web Services",
        body: null,
        tags: null
    }
)}

{@render ContentCard(
    [{
        href: "https://www.credly.com/badges/64f4d7e9-60cd-4802-9c67-37c990767c3d",
        title: "AWS Dev Associate Certification",
        src: "https://cloud.swrigdon.com/s/2r2yk9wy95CYsQi/preview",
        alt: "AWS Dev Associate Cert Badge"
    }],
    {
        heading: "Certified Associate Developer - Amazon Web Services",
        body: null,
        tags: null
    }
)}
