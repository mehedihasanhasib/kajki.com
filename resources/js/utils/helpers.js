import { usePage } from "@inertiajs/react";

export function asset(path) {
    const {ziggy} = usePage().props
    return ziggy.url + "/" + path;
}
