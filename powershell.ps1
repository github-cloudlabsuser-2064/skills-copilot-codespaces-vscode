# Import the Azure module
Import-Module Az

# Define parameters
$resourceGroupName = "example-resources"
$storageAccountName = "examplestorageacct"
$location = "West Europe"
$sku = "Standard_LRS"

# Login to Azure
Connect-AzAccount

# Create the resource group if it doesn't exist
if (-not (Get-AzResourceGroup -Name $resourceGroupName -ErrorAction SilentlyContinue)) {
    New-AzResourceGroup -Name $resourceGroupName -Location $location
}

# Create the storage account
New-AzStorageAccount -ResourceGroupName $resourceGroupName `
                     -Name $storageAccountName `
                     -Location $location `
                     -SkuName $sku `
                     -Kind StorageV2