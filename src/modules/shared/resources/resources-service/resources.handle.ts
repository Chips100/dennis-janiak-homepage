/**
 * A handle that allows access to resources.
 */
export class ResourcesHandle<TResources> {
    /**
     * Resource values.
     */
    public values: TResources;

    /**
     * Indicates if the values are not yet available, because they are still being loaded.
     */
    public isLoading: boolean;
}