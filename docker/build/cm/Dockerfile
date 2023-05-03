# escape=`

ARG PARENT_IMAGE
ARG SOLUTION_IMAGE
ARG TOOLS_IMAGE

# DEMO TEAM CUSTOMIZATION
FROM ${SOLUTION_IMAGE} as solution
# END CUSTOMIZATION

FROM ${TOOLS_IMAGE} as tools
FROM ${PARENT_IMAGE}

SHELL ["powershell", "-Command", "$ErrorActionPreference = 'Stop'; $ProgressPreference = 'SilentlyContinue';"]

WORKDIR C:\inetpub\wwwroot

# Copy developer tools and entrypoint
COPY --from=tools C:\tools C:\tools

# DEMO TEAM CUSTOMIZATION
# Copy additional files to container
COPY ./Data/ /inetpub/wwwroot/

# Copy solution website files
COPY --from=solution /artifacts/sitecore/ ./

# Copy website images to allow displaying them in Horizon without EnableRelativeLinkProcessing
COPY --from=solution /artifacts/src/rendering/public ./

# Perform transforms
RUN (Get-ChildItem -Path 'C:\\inetpub\\wwwroot\\xdts\\web*.xdt' -Recurse ) | `
    ForEach-Object { & 'C:\\tools\\scripts\\Invoke-XdtTransform.ps1' -Path 'C:\\inetpub\\wwwroot\\web.config' -XdtPath $_.FullName `
    -XdtDllPath 'C:\\tools\\bin\\Microsoft.Web.XmlTransform.dll'; };
# END CUSTOMIZATION
