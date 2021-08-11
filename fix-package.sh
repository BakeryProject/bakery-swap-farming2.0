sysOS=$(uname -s)
if [ "$sysOS" = "Darwin" ]; then
  if ! grep -q bsct node_modules/@ethersproject/providers/lib/etherscan-provider.js; then
    sed -i .bak '227 i \
\            \case "bsct":\
\                \return "https:/\\/api-testnet.bscscan.com";\
\            \case "bsc":\
\                \return "https:/\\/api.bscscan.com";\
' node_modules/@ethersproject/providers/lib/etherscan-provider.js
  fi
elif [ "$sysOS" = "Linux" ]; then
  if ! grep -q bsct node_modules/@ethersproject/providers/lib/etherscan-provider.js; then
    sed -i .bak '227 i \
\            \case "bsct":\
\                \return "https:/\\/api-testnet.bscscan.com";\
\            \case "bsc":\
\                \return "https:/\\/api.bscscan.com";\
' node_modules/@ethersproject/providers/lib/etherscan-provider.js
  fi
else
  echo "Other OS: $sysOS"
fi
